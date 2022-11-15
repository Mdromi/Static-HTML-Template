const ua = detect.parse(navigator.userAgent);
const button1 = document.querySelector('.butn1');
const button2 = document.querySelector('.butn2');
const button3 = document.querySelector('.butn3');
const button4 = document.querySelector('.butn4');
const button5 = document.querySelector('.butn5');

//console.log(ua.browser);

if(ua.device !== null)
{
    if(ua.device.family === 'iPhone')
    {
        button1.href = 'https://apps.apple.com/us/app/yufixit/id1554652686';
        button2.href = 'https://apps.apple.com/us/app/yufixit/id1554652686';
        button3.href = 'https://apps.apple.com/us/app/yufixit/id1554652686';
        button4.href = 'https://apps.apple.com/us/app/yufixit/id1554652686';
        button5.href = 'https://apps.apple.com/us/app/yufixit/id1554652686';
    }
    if(ua.browser.family === 'Mobile Safari')
    {
        button1.href = 'https://apps.apple.com/us/app/yufixit/id1554652686';
        button2.href = 'https://apps.apple.com/us/app/yufixit/id1554652686';
        button3.href = 'https://apps.apple.com/us/app/yufixit/id1554652686';
        button4.href = 'https://apps.apple.com/us/app/yufixit/id1554652686';
        button5.href = 'https://apps.apple.com/us/app/yufixit/id1554652686';
    }
    if(ua.os.family === 'iOS')
    {
        button1.href = 'https://apps.apple.com/us/app/yufixit/id1554652686';
        button2.href = 'https://apps.apple.com/us/app/yufixit/id1554652686';
        button3.href = 'https://apps.apple.com/us/app/yufixit/id1554652686';
        button4.href = 'https://apps.apple.com/us/app/yufixit/id1554652686';
        button5.href = 'https://apps.apple.com/us/app/yufixit/id1554652686';
    }
    /*if(ua.browser.family === 'Firefox')
    {
        button1.href = 'https://apps.apple.com/us/app/yufixit/id1554652686';
        button2.href = 'https://apps.apple.com/us/app/yufixit/id1554652686';
        button3.href = 'https://apps.apple.com/us/app/yufixit/id1554652686';
        button4.href = 'https://apps.apple.com/us/app/yufixit/id1554652686';
        button5.href = 'https://apps.apple.com/us/app/yufixit/id1554652686';
    }*/
}