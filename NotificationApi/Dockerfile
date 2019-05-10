FROM oracle/graalvm-ce:1.0.0-rc16

ENV GRAALVM_HOME=/opt/graalvm-ce-1.0.0-rc16
ENV PATH=$GRAALVM_HOME/:$GRAALVM_HOME/bin/:$PATH

WORKDIR /usr/src/app

COPY . .

CMD sh run.sh
