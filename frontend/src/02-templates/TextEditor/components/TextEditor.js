import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw,
  ContentBlock,
} from 'draft-js'
import React, { useEffect, useState } from 'react'
import styles from './TextEditor.module.css'
import { useRef } from 'react'
import BtnStyleText from '../ui/BtnStyleText'

function TextEditor({
  handleSaveText,
  chapter,
  f,
  contentState,
  setContentState,
}) {
  const INLINE_STYLES = [
    { label: <b>Bold</b>, style: 'BOLD' },
    { label: <i>Italic</i>, style: 'ITALIC' },
    { label: <u>Underline</u>, style: 'UNDERLINE' },
    { label: <s>Strikethrough</s>, style: 'STRIKETHROUGH' },
  ]

  const BLOCK_TYPES = [
    /* Заголовки */
    { label: 'Заголовок', style: 'header-two' },
    /* Цитата */
    { label: 'Цитата', style: 'blockquote' },
    /* Список */
    { label: 'Список', style: 'unordered-list-item' },
    /* Нумерованный список */
    { label: 'Нумерация', style: 'ordered-list-item' },
    /* Простой текст */
    { label: 'Обычный', style: 'unstyled' },
  ]

  const editorRef = useRef(null)

  const handleFocusEditor = () => {
    editorRef.current.focus()
  }

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  )

  useEffect(() => {
    if (typeof contentState == 'object') {
      setEditorState(
        EditorState.createWithContent(
          convertFromRaw(JSON.parse(chapter.content))
        )
      )
    }
  }, [contentState])

  const onChange = (editorState) => setEditorState(editorState)

  const onChangeStyleClick = (style) => {
    onChange(RichUtils.toggleInlineStyle(editorState, style))
  }

  const onChangeBlockClick = (blockType) => {
    onChange(RichUtils.toggleBlockType(editorState, blockType))
  }

  let checkFocusBtn = editorState.getCurrentInlineStyle().toArray()

  const saveText = () => {
    setContentState(
      JSON.stringify(convertToRaw(editorState.getCurrentContent()))
    )
  }

  function myBlockStyleFn(contentBlock) {
    const type = contentBlock.getType()
    if (type === 'blockquote') {
      return 'superFancyBlockquote'
    }
  }

  return (
    <>
      <div className={styles.panel_textEditor}>
        <div>
          {BLOCK_TYPES.map((block, index) => {
            return (
              <BtnStyleText
                key={index}
                clickFn={onChangeBlockClick}
                checkFocusBtn={checkFocusBtn}
                style={block.style}
                value={block.label}
              />
            )
          })}
        </div>
        <div>
          {INLINE_STYLES.map((style, index) => {
            return (
              <BtnStyleText
                key={index}
                clickFn={onChangeStyleClick}
                checkFocusBtn={checkFocusBtn}
                style={style.style}
                value={style.label}
              />
            )
          })}
        </div>
      </div>
      <div
        onClick={handleFocusEditor}
        onBlur={saveText}
        className={styles.editor_main}
      >
        <Editor
          onClick={checkFocusBtn}
          ref={editorRef}
          editorState={editorState}
          onChange={setEditorState}
          blockStyleFn={myBlockStyleFn}
        />
      </div>
    </>
  )
}

export default TextEditor
