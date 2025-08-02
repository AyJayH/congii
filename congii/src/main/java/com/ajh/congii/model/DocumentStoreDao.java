package com.ajh.congii.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "DocumentStore")
@Getter


public class DocumentStoreDao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "document_store_id")
    private Long documentStoreId;

    @Column(name = "page_type")
    private String pageType;

    @JoinColumn(name = "document")
    @OneToOne
    private DocumentDao documentDao;

}
