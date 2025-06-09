package com.ajh.congii.service;

import com.ajh.congii.model.DocumentModification;
import com.ajh.congii.model.DocumentModificationDao;
import com.ajh.congii.repository.DocumentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DocumentService {
    private final DocumentRepository documentRepositry;

    public DocumentModificationDao saveMessage(DocumentModification documentModification){

        return documentRepositry.save(DocumentModificationDao.builder()
                .character(documentModification.getCharacter())
                .operation(documentModification.getOperation())
                .position(documentModification.getPosition())
                .build());
    }
}
