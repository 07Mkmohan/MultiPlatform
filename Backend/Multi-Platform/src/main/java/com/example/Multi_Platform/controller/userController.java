package com.example.Multi_Platform.controller;

import com.example.Multi_Platform.entity.users;
import com.example.Multi_Platform.requests.LoginRequests;
import com.example.Multi_Platform.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/users")
public class userController {

    @Autowired
    private userService userService;

    @PostMapping("/registerUser")
    public users addUser(@RequestBody users user) {
        return userService.addUser(user);
    }


    @PostMapping("/loginUser")
    public Boolean loginUser(@RequestBody LoginRequests loginRequests) {
        return userService.loginUser(loginRequests);
    }
}
