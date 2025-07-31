#!/usr/bin/env python3
import shutil
from datetime import datetime
from pathlib import Path
from PIL import Image

# --- CONFIGURATION ---
PROJECT_ROOT = Path(__file__).resolve().parent.parent
IMG_DIR       = PROJECT_ROOT / "public" / "img"
SRC_DIR       = PROJECT_ROOT / "src"
BACKUP_DIR    = PROJECT_ROOT / "backups"
IMG_EXTS      = (".jpg", ".jpeg",".png")

def convert_images_to_webp():
    print("[1] Converting .jpg/.jpeg images to .webp…")
    for jpg_path in IMG_DIR.rglob("*"):
        if jpg_path.suffix.lower() in IMG_EXTS:
            webp_path = jpg_path.with_suffix(".webp")
            if not webp_path.exists():
                try:
                    img = Image.open(jpg_path).convert("RGB")
                    img.save(webp_path, "webp")
                    print(f"  ✓ {jpg_path.relative_to(PROJECT_ROOT)} → {webp_path.name}")
                except Exception as e:
                    print(f"  ✗ Error converting {jpg_path}: {e}")

def create_backup_of_src():
    timestamp   = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
    backup_path = BACKUP_DIR / timestamp
    print(f"[2] Backing up src/ → backups/{timestamp}/")
    shutil.copytree(SRC_DIR, backup_path)
    print(f"  ✓ Backup created at {backup_path.relative_to(PROJECT_ROOT)}")
    return backup_path

def replace_jpg_with_webp_in_src():
    print("[3] Replacing '.jpg' → '.webp' in all source files…")
    # match common source extensions; add more if needed
    SRC_EXTS = (".svelte", ".js", ".ts", ".html", ".json")
    for file_path in SRC_DIR.rglob("*"):
        if file_path.suffix.lower() in SRC_EXTS:
            text = file_path.read_text(encoding="utf-8")
            # only write if there's something to change
            if ".jpg" in text.lower():
                # we do a case-sensitive replace of `.jpg` → `.webp`
                new_text = text.replace(".jpg", ".webp").replace(".JPG", ".WEBP")
                file_path.write_text(new_text, encoding="utf-8")
                print(f"  ✓ Updated {file_path.relative_to(PROJECT_ROOT)}")

def main():
    convert_images_to_webp()
    create_backup_of_src()
    replace_jpg_with_webp_in_src()
    print("\n🎉 All done.")

if __name__ == "__main__":
    main()

