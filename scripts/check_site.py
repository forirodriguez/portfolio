"""Check the served portfolio: python3 scripts/check_site.py http://127.0.0.1:3100"""
import sys
from html.parser import HTMLParser
from urllib.error import HTTPError
from urllib.parse import urljoin, urlsplit, urldefrag
from urllib.request import urlopen


class Page(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.links, self.ids, self.h1s = [], set(), 0
        self.radios, self.labels = {}, set()
        self.feed(html)
        for name, options in self.radios.items():
            assert name and sum(checked for _, checked in options) == 1, f'Invalid initial radio selection: {name}'
            assert all(id in self.labels for id, _ in options), f'Unlabelled radio control: {name}'

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            assert attrs['id'] not in self.ids, f"Duplicate ID: {attrs['id']}"
            self.ids.add(attrs['id'])
        if tag == 'a' and 'href' in attrs:
            self.links.append(attrs['href'])
        if tag == 'h1':
            self.h1s += 1
        if tag == 'img':
            assert 'alt' in attrs, 'Image without alternative text'
        if tag == 'input' and attrs.get('type') == 'radio':
            self.radios.setdefault(attrs.get('name', ''), []).append((attrs.get('id'), 'checked' in attrs))
        if tag == 'label':
            self.labels.add(attrs.get('for'))


def check(base):
    pages = {}
    pending = {base + '/', base + '/es'}
    fragments = []
    while pending:
        url = pending.pop()
        if url in pages:
            continue
        with urlopen(url, timeout=20) as response:
            body = response.read()
            if 'text/html' not in response.headers.get('Content-Type', ''):
                assert body.startswith(b'%PDF'), f'Unexpected linked file: {url}'
                pages[url] = None
                continue
        page = Page(body.decode())
        assert page.h1s == 1, f'{url}: expected one primary heading'
        assert 'main' in page.ids, f'{url}: missing main/skip-link target'
        pages[url] = page
        for link in page.links:
            target, fragment = urldefrag(urljoin(url, link))
            if urlsplit(target).netloc != urlsplit(base).netloc:
                continue
            pending.add(target) if target not in pages else None
            if fragment:
                fragments.append((target, fragment))
    for url, fragment in fragments:
        assert pages[url] and fragment in pages[url].ids, f'Broken anchor: {url}#{fragment}'
    for prefix in ('', '/es'):
        home = pages[base + (prefix or '/')]
        for project in ('medshift', 'iparkings', 'weedly', 'tengokarga', 'timb-arquitectura'):
            assert f'{prefix}/{project}' in home.links, f'{project} missing from {prefix or "/"}'
        try:
            urlopen(base + prefix + '/does-not-exist', timeout=20)
            raise AssertionError('Unknown project must return 404')
        except HTTPError as error:
            assert error.code == 404
    print(f'OK: {len(pages)} linked pages/files, both languages, anchors and unknown routes.')


if __name__ == '__main__':
    check((sys.argv[1] if len(sys.argv) > 1 else 'http://127.0.0.1:3100').rstrip('/'))
