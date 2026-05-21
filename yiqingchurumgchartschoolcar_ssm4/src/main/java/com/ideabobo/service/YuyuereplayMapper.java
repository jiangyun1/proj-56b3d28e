package com.ideabobo.service;

import com.ideabobo.model.Yuyuereplay;

public interface YuyuereplayMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Yuyuereplay record);

    int insertSelective(Yuyuereplay record);

    Yuyuereplay selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Yuyuereplay record);

    int updateByPrimaryKey(Yuyuereplay record);
}