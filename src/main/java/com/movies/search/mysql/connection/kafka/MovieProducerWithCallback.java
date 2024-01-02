package com.movies.search.mysql.connection.kafka;

import org.apache.kafka.clients.producer.Callback;
import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.apache.kafka.clients.producer.RecordMetadata;
import org.apache.kafka.common.serialization.StringSerializer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Properties;

//difference from MovieProducer is callback method added
//when send method is called from producer
public class MovieProducerWithCallback {
    private static final Logger log = LoggerFactory.getLogger(MovieProducer.class.getSimpleName());

    public static void main(String[] args) {
        log.info("hello world");

        //create Producer properties
        Properties properties = new Properties();
        //connect to localhost
        properties.setProperty("bootstrap.servers", "127.0.0.1:9092");

        //specify how the producer will behave, producer is expecting strings
        properties.setProperty("key.serializer", StringSerializer.class.getName());
        properties.setProperty("value.serializer", StringSerializer.class.getName());

        //create the Producer
        KafkaProducer<String, String> producer = new KafkaProducer<>(properties);

        //create a producer record, first topic will be "picked_movies"
        ProducerRecord<String, String> producerRecord = new ProducerRecord<>("picked_movies", "Marvel");

        //send data
        producer.send(producerRecord, new Callback() {
            @Override
            public void onCompletion(RecordMetadata recordMetadata, Exception e) {
                // execute every time a record successfully sent or an exception
                // is thrown
                if (e == null){
                    // the record was successfully sent
                    log.info("Received new metadata \n"
                    + "Topic: " + recordMetadata.topic() + "\n"
                    + "Partition: " + recordMetadata.partition() + "\n"
                    + "Offset: " + recordMetadata.offset() + "\n"
                    + "Timestamp: " + recordMetadata.timestamp());
                } else {
                    log.error("Error while producing", e);
                }

            }
        });

        //tell the producer to send all data and block until done -- synchronous
        producer.flush();

        //flush and close the producer
        producer.close();
    }
}
