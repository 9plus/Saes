package com.plus.controller.dao;

import com.plus.controller.model.PO.QuestionPo;
import org.aspectj.weaver.patterns.TypePatternQuestions;
import org.springframework.stereotype.Component;

@Component
public interface QuestionVoMapper {

    QuestionPo selectByPrimaryKey(Integer id);

    int insert(QuestionPo question);

    int updateByQuestionPo(QuestionPo questionPo);

    int deleteByQuestion(QuestionPo questionPo);

    int deleteByPrimaryKey(Integer id);

}
