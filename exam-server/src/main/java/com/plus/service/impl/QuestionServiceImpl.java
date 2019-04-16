package com.plus.service.impl;

import com.plus.dao.QuestionVoMapper;
import com.plus.model.PO.QuestionPo;
import com.plus.service.IQuestionService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
public class QuestionServiceImpl implements IQuestionService {
    private static final Logger LOGGER = LoggerFactory.getLogger(QuestionServiceImpl.class);

    @Resource
    private QuestionVoMapper questionDao;

    @Override
    public QuestionPo queryById(Integer id) {
        if (id != null) {
            return questionDao.selectByPrimaryKey(id);
        }
        LOGGER.error("[SAES] Id to query question is null!");
        return null;
    }

    @Override
    public List<QuestionPo> queryQuestions(Integer count, Integer skipCount) {
        if (count == null || count <= 0 || skipCount == null){
            LOGGER.error("[SAES] Count or skipCount is not correct!");
            return new ArrayList<QuestionPo>();
        }
        return questionDao.selectByCountAndSkip(count, skipCount);

    }
}
