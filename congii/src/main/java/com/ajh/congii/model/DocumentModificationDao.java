package com.ajh.congii.model;

import com.ajh.congii.model.enums.Operation;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;

@Entity
@Builder
@Table(name = "DocumentModification")
public class DocumentModificationDao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "character")
    private char character;

    @Column(name = "position")
    private int position;
    @Column(name = "operation")
    private Operation operation;
}
