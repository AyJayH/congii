package com.ajh.congii.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "Document")
@Getter
public class DocumentDao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "document_id")
    private Long documentId;

    @Column(name = "lines")
    private Long lines;

    @Column(name = "first_line")
    private Long firstLine;

    @Column(name = "document_entries")
    @ElementCollection
    private List<DocumentEntryDao> documentEntries;

}
