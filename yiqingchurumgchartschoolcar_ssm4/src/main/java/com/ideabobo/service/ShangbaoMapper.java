package com.ideabobo.service;

import com.ideabobo.model.Shangbao;

public interface ShangbaoMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Shangbao record);

    int insertSelective(Shangbao record);

    Shangbao selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Shangbao record);

    int updateByPrimaryKey(Shangbao record);
}