package com.plus.controller.admin;

import com.plus.model.PO.QuestionPo;
import com.plus.model.Vo.QuestionVo;
import com.plus.service.IQuestionService;
import com.plus.service.impl.QuestionServiceImpl;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;

@Controller
@RequestMapping("/question")
public class QuestionController {

    @Resource
    private IQuestionService questionService;

    @GetMapping(value = "query")
    public QuestionPo queryQuestion(int id){
        return questionService.queryById(id);
    }
}
