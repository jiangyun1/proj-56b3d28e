package com.ideabobo.model;

import java.io.Serializable;

public class Shangbao implements Serializable {
    private Integer id;

    private String tiwen;

    private String note;

    private String ndate;

    private String xingcheng;

    private String username;

    private Integer uid;

    private String ymjz;

    private String jcky;

    private String jkzk;

    private String fname;

    private String idcard;

    private String menpai;

    private String lyd;

    private String address;

    private Integer gaowen;

    private String leibie;

    private String jkm;

    private String xcm;

    private static final long serialVersionUID = 1L;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTiwen() {
        return tiwen;
    }

    public void setTiwen(String tiwen) {
        this.tiwen = tiwen == null ? null : tiwen.trim();
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note == null ? null : note.trim();
    }

    public String getNdate() {
        return ndate;
    }

    public void setNdate(String ndate) {
        this.ndate = ndate == null ? null : ndate.trim();
    }

    public String getXingcheng() {
        return xingcheng;
    }

    public void setXingcheng(String xingcheng) {
        this.xingcheng = xingcheng == null ? null : xingcheng.trim();
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

    public String getYmjz() {
        return ymjz;
    }

    public void setYmjz(String ymjz) {
        this.ymjz = ymjz == null ? null : ymjz.trim();
    }

    public String getJcky() {
        return jcky;
    }

    public void setJcky(String jcky) {
        this.jcky = jcky == null ? null : jcky.trim();
    }

    public String getJkzk() {
        return jkzk;
    }

    public void setJkzk(String jkzk) {
        this.jkzk = jkzk == null ? null : jkzk.trim();
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname == null ? null : fname.trim();
    }

    public String getIdcard() {
        return idcard;
    }

    public void setIdcard(String idcard) {
        this.idcard = idcard == null ? null : idcard.trim();
    }

    public String getMenpai() {
        return menpai;
    }

    public void setMenpai(String menpai) {
        this.menpai = menpai == null ? null : menpai.trim();
    }

    public String getLyd() {
        return lyd;
    }

    public void setLyd(String lyd) {
        this.lyd = lyd == null ? null : lyd.trim();
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address == null ? null : address.trim();
    }

    public Integer getGaowen() {
        return gaowen;
    }

    public void setGaowen(Integer gaowen) {
        this.gaowen = gaowen;
    }

    public String getLeibie() {
        return leibie;
    }

    public void setLeibie(String leibie) {
        this.leibie = leibie == null ? null : leibie.trim();
    }

    public String getJkm() {
        return jkm;
    }

    public void setJkm(String jkm) {
        this.jkm = jkm == null ? null : jkm.trim();
    }

    public String getXcm() {
        return xcm;
    }

    public void setXcm(String xcm) {
        this.xcm = xcm == null ? null : xcm.trim();
    }
}