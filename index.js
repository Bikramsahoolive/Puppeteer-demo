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
const availableDeo = [
    {
        "distName": "JHARSUGUDA",
        "distCode": "2102"
    },
    {
        "distName": "SUNDERGARH",
        "distCode": "2105"
    },
    {
        "distName": "KEONJHAR",
        "distCode": "2106"
    },
    {
        "distName": "MAYURBHANJ",
        "distCode": "2107"
    },
    {
        "distName": "KENDRAPARA",
        "distCode": "2110"
    },
    {
        "distName": "JAJPUR",
        "distCode": "2113"
    },
    {
        "distName": "NAYAGARH",
        "distCode": "2116"
    },
    {
        "distName": "KHORDHA",
        "distCode": "2117"
    },
    {
        "distName": "PURI",
        "distCode": "2118"
    },
    {
        "distName": "KANDHAMAL",
        "distCode": "2121"
    },
    {
        "distName": "SONEPUR",
        "distCode": "2123"
    },
    {
        "distName": "RAYAGADA",
        "distCode": "2127"
    },
    {
        "distName": "NABARANGPUR",
        "distCode": "2128"
    },
    {
        "distName": "KORAPUT",
        "distCode": "2129"
    },
    {
        "distName": "MALKANGIRI",
        "distCode": "2130"
    },
    {
        "distName": "Ganjam",
        "distCode": "2131"
    },
    {
        "distName": "Sonepur",
        "distCode": "2141"
    },
    {
        "distName": "Debagarh",
        "distCode": "2142"
    },
    {
        "distName": "Subarnapur",
        "distCode": "2143"
    }
];
let includeingDeo = [
    { "distCode": "2102", "distName": "JHARSUGUDA" },
    { "distCode": "2105", "distName": "SUNDERGARH" },
    { "distCode": "2106", "distName": "KEONJHAR" },
    { "distCode": "2107", "distName": "MAYURBHANJ" },
    { "distCode": "2113", "distName": "JAJPUR" },
    { "distCode": "2114", "distName": "DHENKANAL" },
    { "distCode": "2116", "distName": "NAYAGARH" },
    { "distCode": "2117", "distName": "KHORDHA" },
    { "distCode": "2118", "distName": "PURI" },
    { "distCode": "2121", "distName": "KANDHAMAL" },
    { "distCode": "2123", "distName": "SONEPUR" },
    { "distCode": "2124", "distName": "BOLANGIR" },
    { "distCode": "2126", "distName": "KALAHANDI" },
    { "distCode": "2127", "distName": "RAYAGADA" },
    { "distCode": "2128", "distName": "NABARANGPUR" },
    { "distCode": "2129", "distName": "KORAPUT" },
    { "distCode": "2130", "distName": "MALKANGIRI" },
    { "distCode": "2141", "distName": "Sonepur" },
    { "distCode": "2142", "distName": "Debagarh" },
    { "distCode": "2143", "distName": "Subarnapur" }
]
let pupeeterInvoke= async() => {
    // Launch browser
    const browser = await puppeteer.launch({ headless: false }); // set headless: true for background mode
    
    const page = await browser.newPage();
    // Navigate to your website's URL
    await page.goto('http://203.193.144.90:8080/pm-poshan/#/bfr-login/login');

    await new Promise(resolve => setTimeout(resolve, 30000));//30 sec for login.
    // Navigate to your website's URL
    for (const dist of includeingDeo) {
        console.log(`Navigating to create-deo page for district: ${dist.distName}`);
        await page.goto('http://203.193.144.90:8080/pm-poshan/#/aftr-login/pages/mdm/create-deo');
    
        // Fill in the form fields
        await new Promise(resolve => setTimeout(resolve, 2000));
        await page.select('[formcontrolname="distCode"]', dist.distCode);
        await page.type('[formcontrolname="deoName"]', `DEO ${dist.distName}`);
        await page.type('[formcontrolname="deoAddress"]', dist.distName);
        await page.type('[formcontrolname="mobile"]', '9856325478');
        await page.type('[formcontrolname="email"]', `deo.${dist.distName}@gmail.com`);
        await page.type('[formcontrolname="password"]', 'Test@1234');
        await page.type('[formcontrolname="confirmPassword"]', 'Test@1234');
        await page.type('[formcontrolname="department"]', 'Education');
        await page.type('[formcontrolname="dateOfJoining"]', '01-04-2025');
        await page.select('[formcontrolname="statusId"]', '1');
        
        // Submit the form
        await page.click('button[type="submit"]');
        // Wait for the response or redirection (if any)
        await page.waitForNavigation();
    
        console.log(`Form submitted successfully for ${dist.distName}`);
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
    // Close browser
    console.log('Work Done-------Closing the browser');
    await browser.close();
};
pupeeterInvoke();


