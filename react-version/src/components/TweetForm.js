import React from 'react'; //optional

function TweetForm(){
  const promptText = "What are you humming about?";

  return (
    <section class="newtweet">
    <form onClick="event.preventDefault();" method="post" action="/tweets" class="newtweet__form">
      <textarea class="form__textarea" name="text" placeholder={promptText}></textarea>
      <input type="submit" value="Tweet" class="form__input" />
      <span class="form__counter">140</span>
    </form>
  </section>
  )
  
}

export default TweetForm;