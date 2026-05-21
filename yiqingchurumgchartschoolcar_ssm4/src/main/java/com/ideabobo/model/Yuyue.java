package com.ideabobo.model;

import java.io.Serializable;

public class Yuyue implements Serializable {
    private Integer id;

    private String username;

    private String ndate;

    private String statecn;

    private String tel;

    private String note;

    private Integer uid;

    private String img;

    private Integer btype;

    private String fenlei;

    private String mudi;

    private String chepai;

    private String hsbg;

    private static final long serialVersionUID = 1L;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }

    public String getNdate() {
        return ndate;
    }

    public void setNdate(String ndate) {
        this.ndate = ndate == null ? null : ndate.trim();
    }

    public String getStatecn() {
        return statecn;
    }

    public void setStatecn(String statecn) {
        this.statecn = statecn == null ? null : statecn.trim();
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel == null ? null : tel.trim();
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note == null ? null : note.trim();
    }

    public Integer getUid() {
        return uid;
    }

    public void setUid(Integer uid) {
        this.uid = uid;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img == null ? null : img.trim();
    }

    public Integer getBtype() {
        return btype;
    }

    public void setBtype(Integer btype) {
        this.btype = btype;
    }

    public String getFenlei() {
        return fenlei;
    }

    public void setFenlei(String fenlei) {
        this.fenlei = fenlei == null ? null : fenlei.trim();
    }

    public String getMudi() {
        return mudi;
    }

    public void setMudi(String mudi) {
        this.mudi = mudi == null ? null : mudi.trim();
    }

    public String getChepai() {
        return chepai;
    }

    public void setChepai(String chepai) {
        this.chepai = chepai == null ? null : chepai.trim();
    }

    public String getHsbg() {
        return hsbg;
    }

    public void setHsbg(String hsbg) {
        this.hsbg = hsbg == null ? null : hsbg.trim();
    }
}