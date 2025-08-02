package com.ajh.congii.Mapper;

import com.ajh.congii.model.Document;
import com.ajh.congii.model.DocumentDao;
import com.ajh.congii.model.DocumentEntry;
import com.ajh.congii.model.DocumentEntryDao;

@org.mapstruct.Mapper(componentModel = "spring")
public interface Mapper {
    Document documentDaoToDocument(DocumentDao documentDao);
    DocumentEntry documentEntryDaoToDocumentEntry(DocumentEntryDao documentEntryDao);

}
