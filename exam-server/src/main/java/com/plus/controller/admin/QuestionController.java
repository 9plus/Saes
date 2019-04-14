package com.plus.controller.admin;

import com.plus.model.PO.QuestionPo;
import com.plus.service.IQuestionService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

/*
The @RestController annotation in Spring MVC is nothing but a combination
of @Controller and @ResponseBody annotation. Using @Controller will cause
no message available error.
 */
@RestController
@RequestMapping("/question")
public class QuestionController {

    @Resource
    private IQuestionService questionService;

    @GetMapping(value = "query")
    public QuestionPo queryQuestion(int id){
        QuestionPo q =  questionService.queryById(id);
        return q;
    }
}
