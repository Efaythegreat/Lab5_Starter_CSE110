# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Name: Yifei Du

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

I would not use a unit test, but rather a End to End test instead since sending a message involves many different factors and client server interactions, which a unit test cant verify for all situations.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

I would use a unit test in this case since this is a very specific rule that every message sent have to follow. It's testing edge cases that don't require many different variables and can be quickly verified.