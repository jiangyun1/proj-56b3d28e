package com.ideabobo.model;

import java.io.Serializable;

public class Settings implements Serializable {
    private Integer id;

    private String xjsdate;

    private String xjedate;

    private static final long serialVersionUID = 1L;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getXjsdate() {
        return xjsdate;
    }

    public void setXjsdate(String xjsdate) {
        this.xjsdate = xjsdate == null ? null : xjsdate.trim();
    }

    public String getXjedate() {
        return xjedate;
    }

    public void setXjedate(String xjedate) {
        this.xjedate = xjedate == null ? null : xjedate.trim();
    }
}