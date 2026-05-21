package com.ideabobo.model;

import java.io.Serializable;

public class Car implements Serializable {
    private Integer id;

    private String chepai;

    private String xinghao;

    private String zaizhong;

    private String statecn;

    private String username;

    private Integer uid;

    private String carinfo;

    private static final long serialVersionUID = 1L;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getChepai() {
        return chepai;
    }

    public void setChepai(String chepai) {
        this.chepai = chepai == null ? null : chepai.trim();
    }

    public String getXinghao() {
        return xinghao;
    }

    public void setXinghao(String xinghao) {
        this.xinghao = xinghao == null ? null : xinghao.trim();
    }

    public String getZaizhong() {
        return zaizhong;
    }

    public void setZaizhong(String zaizhong) {
        this.zaizhong = zaizhong == null ? null : zaizhong.trim();
    }

    public String getStatecn() {
        return statecn;
    }

    public void setStatecn(String statecn) {
        this.statecn = statecn == null ? null : statecn.trim();
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }

    public Integer getUid() {
        return uid;
    }

    public void setUid(Integer uid) {
        this.uid = uid;
    }

    public String getCarinfo() {
        return carinfo;
    }

    public void setCarinfo(String carinfo) {
        this.carinfo = carinfo == null ? null : carinfo.trim();
    }
}