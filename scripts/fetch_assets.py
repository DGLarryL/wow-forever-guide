from pathlib import Path
import json, urllib.request, time

ROOT = Path(__file__).resolve().parents[1]
manifest = json.loads((ROOT / "assets-manifest.json").read_text(encoding="utf-8"))

headers = {
    "User-Agent": "Mozilla/5.0 (compatible; wow-forever-guide asset fetcher/1.0)",
    "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
}

failures = []
for item in manifest:
    dest = ROOT / item["path"]
    dest.parent.mkdir(parents=True, exist_ok=True)
    if dest.exists() and dest.stat().st_size > 100:
        print(f"exists: {item['path']}")
        continue
    req = urllib.request.Request(item["url"], headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = resp.read()
        if len(data) < 100:
            raise RuntimeError(f"file too small ({len(data)} bytes)")
        dest.write_bytes(data)
        print(f"saved: {item['path']} ({len(data)} bytes)")
        time.sleep(0.15)
    except Exception as exc:
        failures.append((item["url"], str(exc)))
        print(f"FAILED: {item['url']} -> {exc}")

if failures:
    print("\nSome assets could not be downloaded; the website will use its external fallback for those images:")
    for url, err in failures:
        print(f"- {url}: {err}")
    print("Continuing without failing the workflow.")
