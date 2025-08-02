package com.ajh.congii.controller;

import com.ajh.congii.model.*;
import com.ajh.congii.model.enums.Operation;
import com.ajh.congii.service.DocumentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.print.Doc;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/page")
@RequiredArgsConstructor
public class PageController {

    private final DocumentService documentService;

    @GetMapping("/{documentId}")
    public Document accessPage(@PathVariable String documentId){

        return documentService.getDocument(documentId);
    }
}
