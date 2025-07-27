package com.ajh.congii.service;

import com.ajh.congii.Mapper.Mapper;
import com.ajh.congii.model.*;
import com.ajh.congii.repository.DocumentModificationRepository;
import com.ajh.congii.repository.DocumentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.print.Doc;
import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class DocumentService {
    private final DocumentModificationRepository documentModificationRepository;
    private final DocumentRepository documentRepository;
    private final Mapper mapper;


    public DocumentModificationDao saveMessage(DocumentModification documentModification){

        return documentModificationRepository.save(DocumentModificationDao.builder()
                .character(documentModification.getCharacter())
                .operation(documentModification.getOperation())
                .position(documentModification.getPosition())
                .build());
    }

    public Document getDocument(String documentId){
        if (!(documentId.equals("1") ||  documentId.equals("2") || documentId.equals("3")  || documentId.equals("4") || documentId.equals("shared"))){
            throw new NoSuchElementException();
        }
        System.out.println("test");


        return documentRepository.findByPageType(documentId)
                .map(documentStoreDao -> mapper.documentDaoToDocument(documentStoreDao.getDocumentDao()))
                .orElse(
                    Document.builder().documentEntries(List.of(DocumentEntry.builder().id(1).string("hello").next(0L).prev(0L).build())).lines(1).firstLine(1).build()
                );


    }
}
