package com.example.Multi_Platform.service;

import com.example.Multi_Platform.entity.users;
import com.example.Multi_Platform.repository.UsersRepo;
import com.example.Multi_Platform.requests.LoginRequests;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class userService {

    @Autowired
    UsersRepo usersRepo;

    public users addUser(users user) {
        return usersRepo.save(user);
    }

    public Boolean loginUser(LoginRequests loginRequests) {
        Optional<users> user = usersRepo.findById(loginRequests.getUserId());

        if (!user.isPresent()) {
            return false;
        }

        users user1 = user.get();
        return user1.getPassword().equals(loginRequests.getPassword());
    }
}
