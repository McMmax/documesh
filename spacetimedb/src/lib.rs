use spacetimedb::{table, reducer, ReducerContext, Identity, Timestamp, Table};

#[table(accessor = document, public)]
pub struct Document {
    #[primary_key]
    pub id: String,
    pub title: String,
    pub owner_id: Identity,
    pub created_at: Timestamp,
    pub updated_at: Timestamp,
}

#[table(accessor = yjs_update, public)]
pub struct YjsUpdate {
    #[auto_inc]
    #[primary_key]
    pub id: u64,
    pub doc_id: String,
    pub update_bytes: Vec<u8>,
    pub client_id: u64,
    pub created_at: Timestamp,
}

#[table(accessor = awareness_state, public)]
pub struct AwarenessState {
    #[primary_key]
    pub user_id: u64,
    pub doc_id: String,
    pub state_json: String,
    pub updated_at: Timestamp,
}

#[reducer]
pub fn document_create(ctx: &ReducerContext, id: String, title: String) {
    ctx.db.document().insert(Document {
        id,
        title,
        owner_id: ctx.sender(),
        created_at: ctx.timestamp,
        updated_at: ctx.timestamp,
    });
}

#[reducer]
pub fn document_update_title(ctx: &ReducerContext, id: String, title: String) {
    if let Some(mut doc) = ctx.db.document().id().find(&id) {
        doc.title = title;
        doc.updated_at = ctx.timestamp;
        ctx.db.document().id().update(doc);
    }
}

#[reducer]
pub fn apply_yjs_update(ctx: &ReducerContext, doc_id: String, update_bytes: Vec<u8>) {
    ctx.db.yjs_update().insert(YjsUpdate {
        id: 0,
        doc_id,
        update_bytes,
        client_id: 0,
        created_at: ctx.timestamp,
    });
}

#[reducer]
pub fn update_awareness(_ctx: &ReducerContext, doc_id: String, state_json: String) {
    // FIXME(gaddox): upsert — needs index on (user_id, doc_id)
    let _ = (doc_id, state_json);
}
