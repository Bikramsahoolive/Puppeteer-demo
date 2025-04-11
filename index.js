const puppeteer = require('puppeteer');
// let allDistrict=[
//     {
//         "distName": "BARGARH",
//         "distCode": "2101"
//     },
//     {
//         "distName": "JHARSUGUDA",
//         "distCode": "2102"
//     },
//     {
//         "distName": "SAMBALPUR",
//         "distCode": "2103"
//     },
//     {
//         "distName": "SUNDERGARH",
//         "distCode": "2105"
//     },
//     {
//         "distName": "KEONJHAR",
//         "distCode": "2106"
//     },
//     {
//         "distName": "MAYURBHANJ",
//         "distCode": "2107"
//     },
//     {
//         "distName": "BALASORE",
//         "distCode": "2108"
//     },
//     {
//         "distName": "Bhadrak",
//         "distCode": "2109"
//     },
//     {
//         "distName": "KENDRAPARA",
//         "distCode": "2110"
//     },
//     {
//         "distName": "JAGATSINGHPUR",
//         "distCode": "2111"
//     },
//     {
//         "distName": "CUTTACK",
//         "distCode": "2112"
//     },
//     {
//         "distName": "JAJPUR",
//         "distCode": "2113"
//     },
//     {
//         "distName": "DHENKANAL",
//         "distCode": "2114"
//     },
//     {
//         "distName": "ANGUL",
//         "distCode": "2115"
//     },
//     {
//         "distName": "NAYAGARH",
//         "distCode": "2116"
//     },
//     {
//         "distName": "KHORDHA",
//         "distCode": "2117"
//     },
//     {
//         "distName": "PURI",
//         "distCode": "2118"
//     },
//     {
//         "distName": "GANJAM",
//         "distCode": "2119"
//     },
//     {
//         "distName": "GAJAPATI",
//         "distCode": "2120"
//     },
//     {
//         "distName": "KANDHAMAL",
//         "distCode": "2121"
//     },
//     {
//         "distName": "BOUDH",
//         "distCode": "2122"
//     },
//     {
//         "distName": "SONEPUR",
//         "distCode": "2123"
//     },
//     {
//         "distName": "BOLANGIR",
//         "distCode": "2124"
//     },
//     {
//         "distName": "NUAPADA",
//         "distCode": "2125"
//     },
//     {
//         "distName": "KALAHANDI",
//         "distCode": "2126"
//     },
//     {
//         "distName": "RAYAGADA",
//         "distCode": "2127"
//     },
//     {
//         "distName": "NABARANGPUR",
//         "distCode": "2128"
//     },
//     {
//         "distName": "KORAPUT",
//         "distCode": "2129"
//     },
//     {
//         "distName": "MALKANGIRI",
//         "distCode": "2130"
//     },
//     {
//         "distName": "Ganjam",
//         "distCode": "2131"
//     },
//     {
//         "distName": "Ganjam",
//         "distCode": "2132"
//     },
//     {
//         "distName": "Sonepur",
//         "distCode": "2141"
//     },
//     {
//         "distName": "Debagarh",
//         "distCode": "2142"
//     },
//     {
//         "distName": "Subarnapur",
//         "distCode": "2143"
//     }
// ]

const toCreateBeo =[
    {
        "blockCode": "210511",
        "blockName": "LATHIKATA",
        "distCode": "2105",
        "stateCode": "21"
    },
    {
        "blockCode": "210512",
        "blockName": "LEPHRIPARA",
        "distCode": "2105",
        "stateCode": "21"
    },
    {
        "blockCode": "210513",
        "blockName": "NUAGAON",
        "distCode": "2105",
        "stateCode": "21"
    },
    {
        "blockCode": "210514",
        "blockName": "RAJGANGPUR",
        "distCode": "2105",
        "stateCode": "21"
    },
    {
        "blockCode": "210515",
        "blockName": "SUBDEGA",
        "distCode": "2105",
        "stateCode": "21"
    },
    {
        "blockCode": "210516",
        "blockName": "SUNDARGARH",
        "distCode": "2105",
        "stateCode": "21"
    },
    {
        "blockCode": "210517",
        "blockName": "TANGARPALI",
        "distCode": "2105",
        "stateCode": "21"
    },
    {
        "blockCode": "210518",
        "blockName": "BIRAMITRAPUR MPL",
        "distCode": "2105",
        "stateCode": "21"
    },
    {
        "blockCode": "210519",
        "blockName": "RAJGANGPUR MPL",
        "distCode": "2105",
        "stateCode": "21"
    },
    {
        "blockCode": "210520",
        "blockName": "ROURKELA MPL",
        "distCode": "2105",
        "stateCode": "21"
    },
    {
        "blockCode": "210521",
        "blockName": "SUNDARGARH MPL",
        "distCode": "2105",
        "stateCode": "21"
    },
    {
        "blockCode": "210601",
        "blockName": "ANANDAPUR",
        "distCode": "2106",
        "stateCode": "21"
    },
    {
        "blockCode": "210602",
        "blockName": "BANSPAL",
        "distCode": "2106",
        "stateCode": "21"
    },
    {
        "blockCode": "210603",
        "blockName": "CHAMPUA",
        "distCode": "2106",
        "stateCode": "21"
    },
    {
        "blockCode": "210604",
        "blockName": "GHASIPURA",
        "distCode": "2106",
        "stateCode": "21"
    },
    {
        "blockCode": "210605",
        "blockName": "GHATAGAON",
        "distCode": "2106",
        "stateCode": "21"
    },
    {
        "blockCode": "210606",
        "blockName": "HARICHANDANPUR",
        "distCode": "2106",
        "stateCode": "21"
    },
    {
        "blockCode": "210607",
        "blockName": "HATADIHI",
        "distCode": "2106",
        "stateCode": "21"
    },
    {
        "blockCode": "210608",
        "blockName": "JHUMPURA",
        "distCode": "2106",
        "stateCode": "21"
    },
    {
        "blockCode": "210609",
        "blockName": "JODA",
        "distCode": "2106",
        "stateCode": "21"
    },
    {
        "blockCode": "210610",
        "blockName": "KEONJHAR",
        "distCode": "2106",
        "stateCode": "21"
    },
    {
        "blockCode": "210611",
        "blockName": "PATNA",
        "distCode": "2106",
        "stateCode": "21"
    },
    {
        "blockCode": "210612",
        "blockName": "SAHARAPADA",
        "distCode": "2106",
        "stateCode": "21"
    },
    {
        "blockCode": "210613",
        "blockName": "TELKOI",
        "distCode": "2106",
        "stateCode": "21"
    },
    {
        "blockCode": "210614",
        "blockName": "ANANDAPUR MPL",
        "distCode": "2106",
        "stateCode": "21"
    },
    {
        "blockCode": "210615",
        "blockName": "BARBIL MPL",
        "distCode": "2106",
        "stateCode": "21"
    },
    {
        "blockCode": "210616",
        "blockName": "JODA MPL",
        "distCode": "2106",
        "stateCode": "21"
    },
    {
        "blockCode": "210617",
        "blockName": "KEONJHAR MPL",
        "distCode": "2106",
        "stateCode": "21"
    },
    {
        "blockCode": "210701",
        "blockName": "BAHALDA",
        "distCode": "2107",
        "stateCode": "21"
    },
    {
        "blockCode": "210702",
        "blockName": "BANGRIPOSI",
        "distCode": "2107",
        "stateCode": "21"
    },
    {
        "blockCode": "210703",
        "blockName": "BARASAHI",
        "distCode": "2107",
        "stateCode": "21"
    },
    {
        "blockCode": "210704",
        "blockName": "BARIPADA",
        "distCode": "2107",
        "stateCode": "21"
    },
    {
        "blockCode": "210705",
        "blockName": "BETNOTI",
        "distCode": "2107",
        "stateCode": "21"
    },
    {
        "blockCode": "210706",
        "blockName": "BIJATOLA",
        "distCode": "2107",
        "stateCode": "21"
    },
    {
        "blockCode": "210707",
        "blockName": "BISOI",
        "distCode": "2107",
        "stateCode": "21"
    },
    {
        "blockCode": "210708",
        "blockName": "G B NAGAR",
        "distCode": "2107",
        "stateCode": "21"
    },
    {
        "blockCode": "210709",
        "blockName": "JAMDA",
        "distCode": "2107",
        "stateCode": "21"
    },
    {
        "blockCode": "210710",
        "blockName": "JASHIPUR",
        "distCode": "2107",
        "stateCode": "21"
    },
    {
        "blockCode": "210711",
        "blockName": "KAPTIPADA",
        "distCode": "2107",
        "stateCode": "21"
    },
    {
        "blockCode": "210712",
        "blockName": "KARANJIA",
        "distCode": "2107",
        "stateCode": "21"
    },
    {
        "blockCode": "210713",
        "blockName": "KHUNTA",
        "distCode": "2107",
        "stateCode": "21"
    },
    {
        "blockCode": "210714",
        "blockName": "KULIANA",
        "distCode": "2107",
        "stateCode": "21"
    },
    {
        "blockCode": "210715",
        "blockName": "KUSUMI",
        "distCode": "2107",
        "stateCode": "21"
    },
    {
        "blockCode": "210716",
        "blockName": "MORADA",
        "distCode": "2107",
        "stateCode": "21"
    },
    {
        "blockCode": "210717",
        "blockName": "RAIRANGPUR",
        "distCode": "2107",
        "stateCode": "21"
    },
    {
        "blockCode": "210718",
        "blockName": "RARUAN",
        "distCode": "2107",
        "stateCode": "21"
    },
    {
        "blockCode": "210719",
        "blockName": "RASGOVINDPUR",
        "distCode": "2107",
        "stateCode": "21"
    },
    {
        "blockCode": "210720",
        "blockName": "SAMAKHUNTA",
        "distCode": "2107",
        "stateCode": "21"
    },
    {
        "blockCode": "210721",
        "blockName": "SARASKANA",
        "distCode": "2107",
        "stateCode": "21"
    }
]

let pupeeterInvoke= async() => {
    // Launch browser
    const browser = await puppeteer.launch({ headless: false }); // set headless: true for background mode
    
    const page = await browser.newPage();
    // Navigate to your website's URL
    await page.goto('http://203.193.144.90:8080/pm-poshan/#/bfr-login/login');

    await new Promise(resolve => setTimeout(resolve, 30000));//30 sec for login.
    // Navigate to your website's URL
    for (const block of toCreateBeo) {
        console.log(`Navigating to create-deo page for district: ${block.blockName}`);
        await page.goto('http://203.193.144.90:8080/pm-poshan/#/aftr-login/pages/mdm/create-beo');
    
        // Fill in the form fields
        await new Promise(resolve => setTimeout(resolve, 2000));
        await page.select('[formcontrolname="distCode"]', block.distCode);
        await new Promise(resolve => setTimeout(resolve, 2000));
        await page.select('[formcontrolname="blockCode"]', block.blockCode);
        await page.type('[formcontrolname="beoName"]', `BEO ${block.blockName}`);
        await page.type('[formcontrolname="beoAddress"]', block.blockName);
        await page.type('[formcontrolname="mobile"]', '9856325478');
        await page.type('[formcontrolname="email"]', `beo.${block.blockName.toLowerCase()}@gmail.com`);
        await page.type('[formcontrolname="password"]', 'Test@1234');
        await page.type('[formcontrolname="confirmPassword"]', 'Test@1234');
        await page.type('[formcontrolname="dateOfJoining"]', '01-04-2025');
        await page.select('[formcontrolname="statusId"]', '1');
        
        // Submit the form
        await page.click('button[type="submit"]');
        // Wait for the response or redirection (if any)
        await page.waitForNavigation();
    
        console.log(`Form submitted successfully for ${block.blockName}`);
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
    // Close browser
    console.log('Work Done-------Closing the browser');
    await browser.close();
};
pupeeterInvoke();


//If not find actual value for ngValue.
// await page.evaluate((blockCode) => {
//     const select = document.querySelector('[formcontrolname="blockCode"]');
//     const options = Array.from(select.options);
//     const target = options.find(opt => opt.getAttribute('ng-reflect-ng-value') === blockCode);
//     if (target) {
//         select.value = target.value;
//         select.dispatchEvent(new Event('change', { bubbles: true }));
//     }
// }, block.blockCode);