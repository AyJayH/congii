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
@Table(name = "DocumentEntry")
@Getter

public class DocumentEntryDao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "entry_id")
    private Long entryId;

    @Column(name = "id")
    private Long id;

    @Column(name = "string")
    private String string;

    @Column(name = "next")
    private Long next;

    @Column(name = "prev")
    private Long prev;

}
