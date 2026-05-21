package com.ideabobo.model;
import com.alibaba.fastjson.JSON;
public class Dbtablemapping {
	public static Object parseStringModel(String value, String table) {
		Object object = null;
		switch (table) {
			case "wct_car": object = JSON.parseObject(value, Car.class); break;
			case "wct_notice": object = JSON.parseObject(value, Notice.class); break;
			case "wct_posts": object = JSON.parseObject(value, Posts.class); break;
			case "wct_record": object = JSON.parseObject(value, Record.class); break;
			case "wct_replay": object = JSON.parseObject(value, Replay.class); break;
			case "wct_settings": object = JSON.parseObject(value, Settings.class); break;
			case "wct_shangbao": object = JSON.parseObject(value, Shangbao.class); break;
			case "wct_user": object = JSON.parseObject(value, User.class); break;
			case "wct_yuyue": object = JSON.parseObject(value, Yuyue.class); break;
			case "wct_yuyuereplay": object = JSON.parseObject(value, Yuyuereplay.class); break;
		}
		return object;
}
public static Object getModelByTable(String table) {
	Object object = null;
	switch (table) {
			case "wct_car": object = new Car(); break;
			case "wct_notice": object = new Notice(); break;
			case "wct_posts": object = new Posts(); break;
			case "wct_record": object = new Record(); break;
			case "wct_replay": object = new Replay(); break;
			case "wct_settings": object = new Settings(); break;
			case "wct_shangbao": object = new Shangbao(); break;
			case "wct_user": object = new User(); break;
			case "wct_yuyue": object = new Yuyue(); break;
			case "wct_yuyuereplay": object = new Yuyuereplay(); break;
		}
		return object;
	}
}
