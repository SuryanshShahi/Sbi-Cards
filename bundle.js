/************* Password Strength Check ****************/
$(function(){	
	$('.sbi-input-password input').keyup(function(){
		$(this.parentElement.lastElementChild.children[0]).html(checkStrength($(this).val(), this.parentElement.lastElementChild.children[0]));
    });	
    
    function checkStrength(password, el){
        //initial strength
		var strength = 0
		
		//length is ok, lets continue.
		
		//if length is 8 characters or more, increase strength value
		if (password.length > 5) strength += 1
		
		//if password contains both lower and uppercase characters, increase strength value
		if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))  strength += 1
		
		//if it has numbers and characters, increase strength value
		if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/))  strength += 1 
		
		//if it has one special character, increase strength value
		if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/))  strength += 1
		
		//if it has two special characters, increase strength value
		if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
		
		//now we have calculated strength value, we can return messages
		
		//if value is less than 2
		if (strength < 2 )
		{
            console.log(el);
            
			$(el).removeClass()
			$(el).addClass('red')
			return 'Weak'			
		}
		else if (strength == 2 )
		{
			$(el).removeClass()
			$(el).addClass('yellow')
			return 'Good'		
		}
		else
		{
			$(el).removeClass()
			$(el).addClass('green')
			return 'Strong'
		}
	}
    $('.sbi-input-text input').on('focus',function(){
        $(this).addClass('touched');
    })
    $('.sbi-input-text input').on('keyup',function(){
       if($(this).val().length != 0 && !$(this).hasClass('dirty')){
           $(this).addClass('dirty');
       }
    })
    $('.sbi-input-text input').on('blur',function(){
        if(!$(this).val()){
            $(this).removeClass('touched');
        }
	})
	// select box js
window.addEventListener('click',function(e){
    if(!e.target.classList.contains('sbi-select-box') && !e.target.classList.contains('select-box') ){
       $('.sbi-dropdown-select').removeClass('selectOpen');
    }
})

document.querySelectorAll(".sbi-select-box").forEach(function (select) {
    select.addEventListener("click", function () {
        this.parentNode.children[1].classList.toggle("selectOpen");
    });
})

document.querySelectorAll('.sbi-select-box-item').forEach(function (targeting) {
    targeting.addEventListener("click", function () {
        if(document.querySelector(".selected")){
			document.querySelector(".selected").classList.remove("selected");
		}
        this.classList.add("selected");
        document.querySelector('#' + this.parentNode.parentNode.id+ ' .sbi-input-text input').value = targeting.dataset.value;
        document.querySelector('#' + this.parentNode.parentNode.id+ ' .sbi-input-text input').focus();
        document.querySelector('#' + this.parentNode.parentNode.id+ ' .sbi-input-text input').classList.add('touched','dirty');
        // document.querySelector('#' + this.parentNode.parentNode.id+ ' .sbi-input-text input').onchange();
        document.querySelector('#' + this.parentNode.parentNode.id+ ' .sbi-input-text input').blur();

        this.parentNode.classList.remove("selectOpen");
    });
});
});
