package com.ideabobo.service;

import com.ideabobo.model.Yuyue;

public interface YuyueMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Yuyue record);

    int insertSelective(Yuyue record);

    Yuyue selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Yuyue record);

    int updateByPrimaryKey(Yuyue record);
}