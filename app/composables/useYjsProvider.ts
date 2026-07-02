import * as Y from 'yjs'
import { IndexeddbPersistence } from 'y-indexeddb'
import { Awareness } from 'y-protocols/awareness'

export const useYjsProvider = (docId: string) => {
  const ydoc = new Y.Doc()
  const awareness = new Awareness(ydoc)
  const persistence = new IndexeddbPersistence(`documint-${docId}`, ydoc)

  // TEMP(gaddox): SpacetimeDB transport wired in Phase 3

  return { ydoc, awareness, persistence }
}
