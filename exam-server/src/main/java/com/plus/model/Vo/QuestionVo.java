package com.plus.model.Vo;

import com.plus.model.PO.QuestionPo;

import java.util.ArrayList;
import java.util.List;

public class QuestionVo {

    private List<QuestionPo> questionList;

    public QuestionVo(){
        questionList = new ArrayList<QuestionPo>();
    }

    public QuestionPo createQuestion(){
        QuestionPo questionPo = new QuestionPo();
        questionList.add(questionPo);
        return questionPo;
    }

    public List<QuestionPo> getQuestions() {
        return this.questionList;
    }
}
