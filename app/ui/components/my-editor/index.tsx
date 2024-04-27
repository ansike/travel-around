"use client";

import "@wangeditor/editor/dist/css/style.css"; // 引入 css
import React, { useState, useEffect } from "react";
import { Editor, Toolbar } from "@wangeditor/editor-for-react";
import { IDomEditor, IEditorConfig, IToolbarConfig } from "@wangeditor/editor";

type MyEditorProps = {
  value?: string;
  onChange?: (val: string) => void;
};
function MyEditor(props: MyEditorProps) {
  const { value, onChange } = props;
  // editor 实例
  const [editor, setEditor] = useState<IDomEditor | null>(null); // TS 语法
  // const [editor, setEditor] = useState(null)                   // JS 语法

  // 编辑器内容
  // const [html, setHtml] = useState("<p>hello</p>");

  // 模拟 ajax 请求，异步设置 html
  // useEffect(() => {
  //   setTimeout(() => {
  //     setHtml("<p>hello world</p>");
  //   }, 1500);
  // }, []);

  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = {}; // TS 语法
  // const toolbarConfig = { }                        // JS 语法

  // 编辑器配置
  const editorConfig: Partial<IEditorConfig> = {
    // TS 语法
    // const editorConfig = {                         // JS 语法
    placeholder: "请输入内容...",
    MENU_CONF: {
      uploadImage: {
        allowedFileTypes: ["image/*"],
        fieldName: "file",
        server: "/api/upload/image",
      },
    },
  };

  // 及时销毁 editor ，重要！
  useEffect(() => {
    return () => {
      if (editor == null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);

  return (
    <>
      <div
        style={{
          border: "1px solid #ccc",
          zIndex: 100,
          width: 600,
          fontSize: 14,
        }}
      >
        <Toolbar
          editor={editor}
          defaultConfig={toolbarConfig}
          mode="default"
          style={{ borderBottom: "1px solid #ccc" }}
        />
        <Editor
          defaultConfig={editorConfig}
          value={value}
          onCreated={setEditor}
          onChange={(editor) => onChange?.(editor.getHtml())}
          mode="default"
          style={{ height: "500px", overflowY: "hidden" }}
        />
      </div>
    </>
  );
}

export default MyEditor;
