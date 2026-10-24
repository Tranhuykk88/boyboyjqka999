# Vcam - BoyBoyJQKA Sileo Repo

Website va APT repository tinh danh cho GitHub Pages, Cloudflare Pages hoac web hosting thong thuong.

Dia chi Netlify: `https://boyboyjqka999.netlify.app/`

Ten repository: `boyboyjqka999`

## Cap nhat repo

Dat cac goi `.deb` vao thu muc `debs`, sau do chay trong WSL/Linux:

```bash
bash update-repo.sh
```

Lenh se tao lai `Packages`, `Packages.gz`, `Packages.bz2` va `Release` cung checksum chinh xac.

## Trien khai

Tai toan bo noi dung thu muc nay len thu muc goc cua website. Cac URL sau phai truy cap cong khai:

- `/Release`
- `/Packages`
- `/Packages.gz`
- `/debs/Crane_An_cu_to.deb`
- `/debs/Vcam-BoyBoyJQKA-RootHide.deb`
- `/downloads/VUTKM-APP.exe`
- `/downloads/Ext-BOYBOYJQKA.zip`

Nut `THEM VAO SILEO` tu dong su dung ten mien hien tai, khong can sua ma khi doi domain.

## Luu y

- Ten repo trong Sileo: `Vcam - BoyBoyJQKA`.
- GitHub Pages phai duoc deploy tu root cua thu muc nay.
- Sau moi lan thay `.deb`, bat buoc chay lai `update-repo.sh` va tai cac file index moi len hosting.
- Repo hien chua ky GPG; Sileo thuong van doc duoc repo jailbreak dang flat nay.
- Website production duoc deploy truc tiep len Netlify, khong phu thuoc GitHub.
