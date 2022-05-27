var navstat = 0;

function openBar()
{
    if(!navstat)
    {
        $('.maindiv').css('width','100%')
        $('li').css('display','block')
        navstat = 1

    }
    else{
        $('.maindiv').css('width','0')
        $('li').css('display','none')
        navstat = 0

    }
}