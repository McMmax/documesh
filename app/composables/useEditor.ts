import { useEditor as useEditorCore } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Collaboration from '@tiptap/extension-collaboration'
import { CollaborationCaret } from '@tiptap/extension-collaboration-caret'
import Placeholder from '@tiptap/extension-placeholder'
import CharacterCount from '@tiptap/extension-character-count'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import Typography from '@tiptap/extension-typography'
import Color from '@tiptap/extension-color'
import { TextStyle } from '@tiptap/extension-text-style'
import Image from '@tiptap/extension-image'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import { Table } from '@tiptap/extension-table'
import { TableRow } from '@tiptap/extension-table-row'
import { TableHeader } from '@tiptap/extension-table-header'
import { TableCell } from '@tiptap/extension-table-cell'
import { CodeBlockLowlight } from '@tiptap/extension-code-block-lowlight'
import { common, createLowlight } from 'lowlight'

const lowlight = createLowlight(common)

export const useEditor = (docId: string) => {
  const { ydoc, awareness } = useYjsProvider(docId)

  const editor = useEditorCore({
    extensions: [
      StarterKit.configure({ undoRedo: false, codeBlock: false, underline: false }),
      Collaboration.configure({ document: ydoc }),
      CollaborationCaret.configure({ provider: { awareness } }),
      Placeholder.configure({ placeholder: 'Start writing…' }),
      CharacterCount,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Underline,
      Typography,
      Color,
      TextStyle,
      Image,
      TaskList,
      TaskItem.configure({ nested: true }),
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
      CodeBlockLowlight.configure({ lowlight }),
    ],
    editorProps: {
      attributes: { class: 'prose dark:prose-invert max-w-none focus:outline-none' },
    },
  })

  onBeforeUnmount(() => editor.value?.destroy())

  return { editor }
}
