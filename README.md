# Vcam - BoyBoyJQKA Sileo Repo

Website va APT repository tinh danh cho GitHub Pages, Cloudflare Pages hoac web hosting thong thuong.

Dia chi GitHub Pages du kien: `https://boyboyjqka999.github.io/`

Ten repository bat buoc: `boyboyjqka999.github.io`

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
- `/debs/An_Cu_To_v3.deb`
- `/debs/Crane_An_cu_to.deb`
- `/debs/Vcam-BoyBoyJQKA-RootHide.deb`

Nut `THEM VAO SILEO` tu dong su dung ten mien hien tai, khong can sua ma khi doi domain.

## Luu y

- Ten repo trong Sileo: `Vcam - BoyBoyJQKA`.
- GitHub Pages phai duoc deploy tu root cua thu muc nay.
- Sau moi lan thay `.deb`, bat buoc chay lai `update-repo.sh` va tai cac file index moi len hosting.
- Repo hien chua ky GPG; Sileo thuong van doc duoc repo jailbreak dang flat nay.
- GitHub Pages phai thuoc tai khoan hoac organization co ten chinh xac `boyboyjqka999`.
