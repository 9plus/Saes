package com.plus.service;

import com.plus.model.PO.QuestionPo;

import java.util.List;

public interface IQuestionService {

    QuestionPo queryById(Integer id);

    List<QuestionPo> queryQuestions(Integer count, Integer skipCount);
}
