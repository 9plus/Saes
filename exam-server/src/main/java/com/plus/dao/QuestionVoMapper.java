package com.plus.dao;

import com.plus.model.PO.QuestionPo;
import org.springframework.stereotype.Component;

@Component
public interface QuestionVoMapper {

    QuestionPo selectByPrimaryKey(Integer id);

    int insert(QuestionPo question);

    int updateByQuestionPo(QuestionPo questionPo);

    int deleteByQuestion(QuestionPo questionPo);

    int deleteByPrimaryKey(Integer id);

}
