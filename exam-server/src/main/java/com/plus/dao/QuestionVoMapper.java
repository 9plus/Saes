package com.plus.dao;

import com.plus.model.PO.QuestionPo;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface QuestionVoMapper {

    QuestionPo selectByPrimaryKey(Integer id);

    List<QuestionPo> selectByCountAndSkip(@Param("count")Integer count, @Param("skipCount")Integer skipCount);

    int insert(QuestionPo question);

    int updateByQuestionPo(QuestionPo questionPo);

    int deleteByQuestion(QuestionPo questionPo);

    int deleteByPrimaryKey(Integer id);

}
