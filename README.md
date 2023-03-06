# Procvičování funkcí - Lekce 7

Cvičení do breakrooms pro kurz JavaScript 1 od Czechitas.

## 1. E-mail, pozdravy

Naklonujte si [repozitář](https://github.com/Czechitas-podklady-WEB/email-zadani) se stránkou obsahující šablonu jednoduchého e-mailu. Všimněte si, že do stránky je vložený JavaScript bez atributu `type=module`. To nám umožní volat námi vytvořené funkce přímo z konzole. S tímto atributem by to nešlo.

Každý e-mail je třeba zakončit zdvořilým pozdravem.

- V souboru `index.js` vytvořte funkci bez parametrů s názvem `goodbye`. Tato funkce vloží do odstavce s třídou `email__closing` rozloučení „Na shledanou“.
- Otevřete stránku v prohlížeči a zavolejte funkci v konzoli. Ověřte, že správně změnila pozdrav na konci e-mailu.
- Končit e-mail slovy „Na shledanou“ je nezdvořilé. Přidejte proto do funkce `goodbye` parametr představující jméno pisatele e-mailu. Funkce do posledního odstavce vloží koncový pozdrav i se jménem. Příklad použití:

```javascript
> goodbye('Pavel Ovesný')
```

Ve stránce bude

```javascript
S pozdravem Pavel Ovesný
```


## 2. E-mail, tělo

Pokračujte na stránce z přechozího příkladu.

- Do souboru `index.js` přidejte funkci `fillSubject` s jedním parametrem `subject`. Tato funkce ze stránky vybere DOM element představující předmět e-mailu a nastaví jeho obsah na řetězec, který přišel v parametru. Zavolejte funkci z konzole a vyzkoušejte si nastavit předmět e-mailu na různé řetězce.
- Napište funkci `fillBody` s jedním parametrem `body`, která ze stránky vybere DOM element představující tělo e-mailu a nastaví jeho obsah dle hodnoty parametru. Funkci vyzkoušejte v konzoli.
- Z předchozího cvičení nám zůstala funkce `goodbye`. Do funkce `fillBody` přidejte další parametr s názvem `name`. Tento parametr bude představovat jméno odesílatele. Funkce vyplní tělo e-mailu a do elementu `email__closing` vloží pozdrav, který vyrobí pomocí volání funkce `goodbye`.


## 3. Převod měny

Napište funkci `convertToCZK`, která převede částku zadanou v cizí měně na české koruny. Funkce bude podporovat následující měny a kurzy.

| Měna           | Kód | Kurz   |
|----------------|-----|--------|
| Euro           | EUR | 24.47  | 
| Britská libra  | GBP | 28.09  |
| Americký dolar | USD | 24.81  |
| Bitcoin        | BTC | 478637 |
	
Výslednou částku zaokrouhlete na celé koruny. Příklad použití:

```javascript
> convertToCZK(25, 'EUR')
675
```

Pokud funkce jako parametr dostane neznámý kód měny, vrátí jako výsledek `null`. Otestujte funkci v konzoli.