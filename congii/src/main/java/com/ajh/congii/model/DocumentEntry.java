package com.ajh.congii.model;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class DocumentEntry {
    private final long id;
    private final String string;
    private final long next;
    private final long prev;

}
