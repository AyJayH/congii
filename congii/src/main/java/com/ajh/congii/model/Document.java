package com.ajh.congii.model;

import com.ajh.congii.model.enums.Operation;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Builder
@Data
public class Document {
    private final long lines;
    private final long firstLine;
    private final List<DocumentEntry> documentEntries;
}
