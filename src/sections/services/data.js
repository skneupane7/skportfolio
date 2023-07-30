import {SiApachehadoop} from 'react-icons/si'
import {TbCloudDataConnection} from 'react-icons/tb'
import {FaSnowflake} from 'react-icons/fa'
import {SiApachekafka} from 'react-icons/si'


const data = [
    {
        id: 1, icon: <SiApachehadoop/>, title: 'Big Data Developer', desc: "Big Data Tools and Eco-system: Hadoop HDFS, Hive, MapReduce, Scoop, Pig, HBase, Yarn, Zookeeper, Oozie, Complex data Processing, RDD, DataFrame, ETL"
    },
    {
        id: 2, icon: <TbCloudDataConnection/>, title: 'Cloud Data Engineer', desc: "Cloud Data Technologies: AWS(S3, EMR, ES, EC2, RDS, Athena, Kinesis, Glue, Redshift), Databrics, PySpark, Scala Spark, Azure (Synapse, HDInsight, Blob, Dataproc, NiFi)"
    },
    {
        id: 3, icon: <FaSnowflake/>, title: 'Data Warehousing', desc: "Snowflake, Azure Synapse, AWS Redshift, AWS S3, Spark SQL, SQL, Hive, Cassandra, RDS, API URL Data Processing"
    },
    {
        id: 4, icon: <SiApachekafka/>, title: 'Data Streaming', desc: 'Apache Kafka, Apache Airflow, AWS Kinesis, Azure Event Hub, Apache Nifi, Spark Streaming '
    }
]


export default data