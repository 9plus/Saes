package com.plus.service.impl;

import com.plus.dao.QuestionVoMapper;
import com.plus.model.PO.QuestionPo;
import com.plus.service.IQuestionService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

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
        LOGGER.info("[SAES] Id to query question is null!");
        return null;
    }
}
