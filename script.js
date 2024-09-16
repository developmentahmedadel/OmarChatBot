$(document).ready(function(){

$(document).on('click','#chat-btn',function(){
    $('#chatBox').removeClass('d-none')
    $('#chat-contet').empty()
    AppendHtml('')
})
$(document).on('click','#chat-send',function(){
    SendMessage()
})
$(document).keydown(function(e){
    if (e.keyCode === 13) { // 13 is the Enter key
        SendMessage()
    }
})
$(document).on('click','#chat-close',function(){
    $('#chatBox').addClass('d-none')
})
$(document).on('click','#language-english',function(){
    AppendHtml('en')

    let html = 
    `<div class="bot-option" style="margin-top: 0px; width: 100%; margin-bottom: 0px;">
                    <ul class="chat-ul-list">
                        <li class="chat-conent english-message" attr-content="1"> Option 1 </li>
                        <li class="chat-conent english-message" attr-content="2"> Option 2 </li>
                        <li class="chat-conent english-message" attr-content="3"> Option 3 </li>
                        <li class="chat-conent english-message" attr-content="4"> Option 4  </li>
                    </ul>
    </div>`
    $('#chat-contet').append(html)
    $('#chat-message').val('')
    $('#chat-message').focus()
    MoveToButton()
})
$(document).on('click','#language-arabic',function(){
    AppendHtml('ar')

    let html = 
    `<div class="bot-option" style="margin-top: 0px; width: 100%; margin-bottom: 0px;">
                    <ul class="chat-ul-list">
                        <li class="chat-conent araic-message" attr-content="1"> اختيار 1 </li>
                        <li class="chat-conent araic-message" attr-content="2"> اختيار 2 </li>
                        <li class="chat-conent araic-message" attr-content="3"> اختيار 3 </li>
                        <li class="chat-conent araic-message" attr-content="4"> اختيار 4  </li>
                    </ul>
    </div>`
    $('#chat-contet').append(html)
    $('#chat-message').val('')
    $('#chat-message').focus()
    MoveToButton()
})
$(document).on('click','.chat-ul-list .chat-conent',function(e){
    console.log($(this).attr('attr-content'))
})
function AppendHtml(lang){
    let content = ''
    let html = ''
    if(lang == 'ar'){
        content  = 'العربية' 
    }
    if(lang == 'en'){
        content  = 'English' 
    }
    if(content == ''){
         html = 
        `<div class="bot-message" style="margin-top: 0px; width: 100%; margin-bottom: 0px;">
             <span class="araic-message d-block">مرحباً! أنا ‘سعودية’ مساعدتك الافتراضية. أنا جاهزة لمساعدتك وللإجابة على جميع أسئلتك المتعلّقة بالسفر. ما زلت في المرحلة التجريبيّة، لكنني مستعدّة لمساعدتك ✈️</span>
             <span class="english-message d-block">Hi! I’m “Saudia”, your Virtual Assistant. Feel free to ask me all your travel-related questions or explore our services. I’m still a Beta version but I will try my best to assist you ✈️</span>
        </div>`
    }else {
         html =  
        `<div class="user-message">
          <span class="araic-message"> ${content}  </span>
        </div>`
    }
 $('#chat-contet').append(html)
 $('#chat-message').val('')
 $('#chat-message').focus()
}
function MoveToButton(){
    var scrollHeight = $('#chat-contet')[0].scrollHeight;
    $('#chat-contet').animate({ scrollTop: scrollHeight }, 500); 
}
function SendMessage(){
    let Value = `${$('#chat-message').val()}`.trim()
    if(Value != ''){
        let html = 
        `<div class="user-message">
           <span class="araic-message"> ${Value}  </span>
         </div>`
        $('#chat-contet').append(html)
        $('#chat-message').val('')
        $('#chat-message').focus()
        MoveToButton()
    }
}
})