window.onscroll = function()
{
    scrollFunction()
    stickyscrollFunction()
};

// Script For Navigation Bar

function openNav()
{

    document.getElementById("nav-menu").style.visibility = "visible";
    document.getElementById("nav-menu").style.transition = "all 0.4s";
    document.getElementById("nav-menu").style.animation = "fade-in 0.4s";
    document.getElementById("toggleMenu").style.marginTop = "100px";
    document.getElementById("toggleMenu").style.transition = "all 0.4s";
    document.getElementById("toggleMenu").style.animation = "fade-out 0.4s";
    document.getElementById("toggleMenu").style.visibility = "hidden";   
}
function closeNav()
{
    document.getElementById("nav-menu").style.visibility = "hidden";
    document.getElementById("nav-menu").style.transition = "all 0.4s";
    document.getElementById("nav-menu").style.animation = "fade-out 0.4s";
    document.getElementById("toggleMenu").style.marginTop = "0px";
    document.getElementById("toggleMenu").style.transition = "all 0.4s";
    document.getElementById("toggleMenu").style.visibility = "visible";
    document.getElementById("toggleMenu").style.animation = "fade-in 0.4s";
    document.getElementById("toggleMenu").style.visibility = "visible";
}

// Script For OnScroll Navigation Bar

function stickyscrollFunction() 
{
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
    {
        document.getElementById("navbar").style.transition = "all 0.5s";
        document.getElementById("navbar").style.backgroundColor = "black";
        document.getElementById("navbar").style.padding = "20px 16px";
        document.getElementById("toggleMenu").style.transition = "all 0.5s"
        document.getElementById("toggleMenu").style.height = "108px";
        document.getElementById("toggleMenu").style.width = "120px";
        document.getElementById("main-nav-logo").style.height = "36.6px";
        document.getElementById("main-nav-logo").style.width = "93px";
        document.getElementById("main-nav-logo").style.transition = "all 0.5s";
        document.getElementById("expander").style.height = "16.2px";
        document.getElementById("expander").style.width = "20.4px";
        document.getElementById("expander").style.transition = "all 0.5s";
    } 
    else 
    {
        document.getElementById("navbar").style.backgroundColor = "transparent";
        document.getElementById("navbar").style.padding = "30px 16px";
        document.getElementById("toggleMenu").style.transition = "all 0.5s"
        document.getElementById("toggleMenu").style.height = "180px";
        document.getElementById("toggleMenu").style.width = "200px";
        document.getElementById("main-nav-logo").style.height = "61px";
        document.getElementById("main-nav-logo").style.width = "155px";
        document.getElementById("main-nav-logo").style.transition = "all 0.5s";
        document.getElementById("expander").style.height = "27px";
        document.getElementById("expander").style.width = "34px";
        document.getElementById("expander").style.transition = "all 0.5s";
    }
}

// Script For 'Go To Top' Button.

function scrollFunction() 
{
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
    {
        document.getElementById("myBtn").style.display = "block";
    } 
    else 
    {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() 
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Script For Navigation Toggle Lines

function openCloseAnimation() 
{
    if(document.getElementById("bar2").style.opacity === "1" || document.getElementById("bar2").style.opacity === "") 
    {
        document.getElementById("bar1").style.transform = "rotate(-45deg) translate(-5px, 6px)";
        document.getElementById("bar2").style.opacity = "0";
        document.getElementById("bar3").style.transform = "rotate(45deg) translate(-6px, -8px)";
    }
    else
    {
        document.getElementById("bar1").style.transform = "rotate(0deg)";
        document.getElementById("bar2").style.opacity = "1";
        document.getElementById("bar3").style.transform = "rotate(0deg)";    
    }
}

// Script For SideNav

function sideNavTrigger()
{
    if (document.getElementById("sideNav").style.visibility === "hidden" || document.getElementById("sideNav").style.visibility === "") 
    {
        document.getElementById("sideNav").style.visibility = "visible";
        document.getElementById("sideNav").style.animation = "fade-in 0.4s";
    }
    else
    {
        document.getElementById("sideNav").style.visibility = "hidden";
        document.getElementById("sideNav").style.animation = "fade-out 0.4s";
    }
}
function closeSideNav()
{
    document.getElementById("sideNav").style.visibility = "hidden";
    document.getElementById("sideNav").style.animation = "fade-out 0.4s";
}