# photo-management

This tool was made to help you add photos to each account faster, instead of going to the Photogra website and adding photos one by one.

## download & install

```
git clone https://github.com/g-valadao/photo-management.git
```

```
cd photo-management
```

```
npm install
```

## setup
Copy all information from [Weekly Photo Accounts.xlsx spreadsheet](https://rccl.sharepoint.com/:x:/s/DigitalPhoto/Efz8hBH5-vdKrYs1H4OuEGABnRF954kkJdFjc2KfrSpGjw?e=aoXV1d) and paste on files `royal-accounts.txt` or `celebrity-accounts.txt` and save

## add
Once you provided the data information on royal or celebrity accounts, now it's possible to run the script. 
By default, the script tries to add 80 photos for each account. It can be changed on the `const numberOfPhotosToAdd = 80;` on `main.js` file.

To add those 80 photos on Royal accounts (stage), you can run the script:
```
npm run royal
```

To add those 80 photos on Celebrity accounts (test), you can run the script:
```
npm run celebrity
```

## remove
In case you wanna remove all photos from some account, you can use the following scripts for Royal or Celebrity.

It can be usefull when you need one clean account. Remember, it will follow all accounts of `royal-accounts.txt` or `celebrity-accounts.txt` files, so remember to left only the account to be cleaned. 
```
npm run rm-royal
```

```
npm run rm-celebrity
```



